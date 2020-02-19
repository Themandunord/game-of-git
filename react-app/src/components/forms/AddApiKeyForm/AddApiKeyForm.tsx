import { useMutation } from '@apollo/react-hooks';
import { useValidateApiKeyLazyQuery } from '@game-of-git/graphql-nest';
import { Button, Container, Grid, Typography } from '@material-ui/core';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { object, string } from 'yup';
import client from '../../../gql/apolloClient';
import CreateApiKeyMutation from '../../../gql/mutations/CreateApiKeyMutation.gql';
import { SystemContext } from '../../../store/system';
import { setIsLoading, setNotLoading } from '../../../store/system/loading';
import { UserContext } from '../../../store/user';
import SelectInput from '../../inputs/select/SelectInput';
import { TextInput } from '../../inputs/text/TextInput';
import useStyles from './styles';
import { AddApiKeyFormData } from './types';
import { setUserData } from '../../../store/user/userData';

const VALID_PROVIDERS = ['sample', 'github'];
const defaultValues: AddApiKeyFormData = {
    name: '',
    key: '',
    provider: 'sample',
};

const AddApiKeyForm: React.FC = () => {
    const classes = useStyles({});
    const globalUserState = useContext(UserContext);
    const globalSystemState = useContext(SystemContext);

    const { dispatch: dispatchUser } = globalUserState;
    const { dispatch: dispatchSystem } = globalSystemState;

    const [formError, setFormError] = useState<string>('');
    const [valid, setValid] = useState<boolean>(false);

    const [createApiKey] = useMutation<any, AddApiKeyFormData>(
        CreateApiKeyMutation,
    );

    const form = useForm<AddApiKeyFormData>({
        mode: 'onBlur',
        defaultValues,
        validationSchema: object<AddApiKeyFormData>({
            name: string().required('Name is required'),
            key: string().required('GitHub Key is required.'),
            provider: string()
                .required('Please select a Repository Provider')
                .oneOf(VALID_PROVIDERS),
        }),
        reValidateMode: 'onBlur',
    });

    const [
        validateKey,
        { data: isValidData, loading: isValidLoading },
    ] = useValidateApiKeyLazyQuery({
        client,
        fetchPolicy: 'no-cache',
    });

    const handleSubmit = useCallback(
        async (variables: AddApiKeyFormData) => {
            let keyData;
            try {
                dispatchSystem(setIsLoading());
                const keyResponse = await createApiKey({
                    variables,
                });
                keyData = keyResponse.data.createApiKey;
            } catch (e) {
                keyData = null;
            }
            dispatchSystem(setNotLoading());

            if (keyData && globalUserState.state.user) {
                dispatchUser(
                    setUserData({
                        ...globalUserState.state.user,
                        apiKeys: [
                            ...globalUserState.state.user.apiKeys,
                            keyData,
                        ],
                    }),
                );
            }
        },
        [
            createApiKey,
            dispatchUser,
            dispatchSystem,
            form,
            globalUserState.state.user,
        ],
    );

    const handleFormChange = useCallback(() => {
        const { provider, key } = form.getValues();
        const { isValid, dirty } = form.formState;
        setFormError('');
        if (!provider || !key || !dirty || !isValid) {
            return;
        }
        validateKey({ variables: { provider, key } });
    }, [form, validateKey, setFormError]);

    useEffect(() => {
        if (isValidLoading) {
            dispatchSystem(setIsLoading());
        } else {
            dispatchSystem(setNotLoading());
        }
        if (isValidData) {
            setValid(isValidData.validateApiKey);
        }
    }, [isValidLoading, isValidData, dispatchSystem]);

    return (
        <Container>
            <div className={classes.paper}>
                <form
                    className={classes.form}
                    onSubmit={form.handleSubmit(handleSubmit)}
                    onBlur={handleFormChange}
                >
                    <Grid container spacing={2}>
                        {formError && (
                            <Grid item xs={12}>
                                <Typography color="error">
                                    {formError}
                                </Typography>
                            </Grid>
                        )}
                        <Grid item xs={12}>
                            <TextInput<AddApiKeyFormData>
                                name="key"
                                placeholder="Repository Key"
                                variant="outlined"
                                formRef={form}
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextInput<AddApiKeyFormData>
                                name="name"
                                placeholder="Repository API Key Name"
                                variant="outlined"
                                formRef={form}
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <SelectInput<AddApiKeyFormData>
                                name="provider"
                                placeholder="Repository Provider"
                                variant="outlined"
                                required
                                formRef={form}
                                options={VALID_PROVIDERS}
                            />
                        </Grid>
                    </Grid>

                    <Button
                        color="primary"
                        fullWidth
                        className={classes.submit}
                        type="submit"
                        variant="contained"
                        disabled={!valid}
                    >
                        Add Key
                    </Button>
                </form>
            </div>
        </Container>
    );
};

export default AddApiKeyForm;
