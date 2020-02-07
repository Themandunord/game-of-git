import { useMutation } from '@apollo/react-hooks';
import { Button, Container, Grid, Typography } from '@material-ui/core';
import React, { useCallback, useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { object, string } from 'yup';
import CreateGameMutation from '../../../gql/mutations/CreateGameMutation.gql';
import { RepositoryListDataItem } from '../../../pages/RepositoryList/types';
import { SystemContext } from '../../../store/system';
import { setIsLoading, setNotLoading } from '../../../store/system/loading';
import SelectInput from '../../inputs/select/SelectInput';
import useStyles from '../AddGithubKeyForm/styles';
import { LoginUserData } from '../LoginForm/types';

interface CreateGameProps {
    user: LoginUserData;
    repository: RepositoryListDataItem;
}

export interface CreateGameFormData {
    gameType: string | null;
}

const GAME_TYPES = ['rpg', 'sim'];

const CreateGameForm: React.FC<CreateGameProps> = ({ repository, user }) => {
    const classes = useStyles({});
    const globalSystemState = useContext(SystemContext);
    const { dispatch: dispatchSystem } = globalSystemState;
    const [
        formError,
        // , setFormError
    ] = useState<string>('');

    const [createGame] = useMutation<any, CreateGameFormData>(
        CreateGameMutation,
    );

    const form = useForm<CreateGameFormData>({
        mode: 'onBlur',
        validationSchema: object<CreateGameFormData>({
            gameType: string()
                .required()
                .oneOf(GAME_TYPES),
        }),
    });

    const handleSubmit = useCallback(
        async (value: CreateGameFormData) => {
            console.log('handling submit: ', value);

            const variables = {
                ...value,
                repository: repository.name,
                owner: user.gitLogin,
            };

            let game;

            try {
                dispatchSystem(setIsLoading());
                // const createGameResponse =
                await createGame({
                    variables,
                });

                // still need to handle this...
            } catch (e) {
                console.error(e);
                game = null;
            }
            dispatchSystem(setNotLoading());

            if (game) {
                console.log('successfully created the game', game);
            }
        },
        [createGame, dispatchSystem, repository.name, user.gitLogin],
    );

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
                            <SelectInput<CreateGameFormData>
                                variant="outlined"
                                required
                                name="gameType"
                                label="Game Type"
                                formRef={form}
                                options={GAME_TYPES}
                            />
                        </Grid>
                    </Grid>

                    <Button
                        color="primary"
                        fullWidth
                        className={classes.submit}
                        type="submit"
                        variant="contained"
                        disabled={!form.formState.isValid}
                    >
                        Create Game
                    </Button>
                </form>
            </div>
        </Container>
    );
};

export default CreateGameForm;
