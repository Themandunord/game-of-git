import { useLazyQuery, useMutation } from '@apollo/react-hooks';
import { Button, Container, Grid, Typography } from '@material-ui/core';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { object, string } from 'yup';
import CreateGitHubKeyMutation from '../../../gql/mutations/CreateGitHubKeyMutation.gql';
import ValidateGitHubKeyQuery from '../../../gql/queries/ValidateGitHubKeyQuery.gql';
import { SystemContext } from '../../../store/system';
import { setIsLoading, setNotLoading } from '../../../store/system/loading';
import { UserContext } from '../../../store/user';
import { setUserData } from '../../../store/user/userData';
import { TextInput } from '../../inputs/text/TextInput';
import useStyles from './styles';
import { AddGithubKeyFormData } from './types';

const AddGithubKeyForm: React.FC = () => {
    const classes = useStyles({});
    const globalUserState = useContext(UserContext);
    const globalSystemState = useContext(SystemContext);

    const { dispatch: dispatchUser } = globalUserState;
    const { dispatch: dispatchSystem } = globalSystemState;

    const [formError, setFormError] = useState<string>('');
    const [valid, setValid] = useState<boolean>(false);

    const [createAppKey] = useMutation<any, AddGithubKeyFormData>(
        CreateGitHubKeyMutation,
    );

    const form = useForm<AddGithubKeyFormData>({
        mode: 'onBlur',
        validationSchema: object<AddGithubKeyFormData>({
            name: string().required('Name is required'),
            key: string().required('GitHub Key is required.'),
        }),
    });

    const [
        validateKey,
        { data: isValidData, loading: isValidLoading },
    ] = useLazyQuery(ValidateGitHubKeyQuery);

    const handleSubmit = useCallback(
        async (value: AddGithubKeyFormData) => {
            let key;
            try {
                dispatchSystem(setIsLoading());
                const keyResponse = await createAppKey({
                    variables: form.getValues(),
                });
                key = keyResponse.data.createAppKey.id;
            } catch (e) {
                key = null;
            }
            dispatchSystem(setNotLoading());

            if (key && globalUserState.state.user) {
                dispatchUser(
                    setUserData({
                        ...globalUserState.state.user,
                        appKeys: [{ id: key }],
                    }),
                );
            }
        },
        [
            createAppKey,
            dispatchUser,
            dispatchSystem,
            form,
            globalUserState.state.user,
        ],
    );

    useEffect(() => {
        if (form.formState.isValid && !isValidLoading && !isValidData) {
            const key = form.getValues().key;
            setFormError('');
            validateKey({ variables: { key } });
        }
    }, [form, validateKey, isValidData, isValidLoading, setFormError]);

    useEffect(() => {
        if (isValidLoading) {
            dispatchSystem(setIsLoading());
        } else {
            dispatchSystem(setNotLoading());
        }
        if (isValidData && isValidData.validateAppKey) {
            setValid(isValidData.validateAppKey.valid);
        }
    }, [isValidLoading, isValidData, dispatchSystem]);

    return (
        <Container>
            <div className={classes.paper}>
                <form
                    className={classes.form}
                    onSubmit={form.handleSubmit(handleSubmit)}
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
                            <TextInput<AddGithubKeyFormData>
                                name="key"
                                placeholder="GitHub Key"
                                variant="outlined"
                                formRef={form}
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextInput<AddGithubKeyFormData>
                                name="name"
                                placeholder="GitHub Key Name"
                                variant="outlined"
                                formRef={form}
                                required
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

export default AddGithubKeyForm;
