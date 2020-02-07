import React, { useContext } from 'react';
import LoadingBar from './LoadingBar/LoadingBar';
import ToastProvider from './ToastProvider/ToastProvider';
import { Container, Grid, Button } from '@material-ui/core';
import { SystemContext } from '../../store/system';
import { TextInput } from '../inputs/text/TextInput';
import { useForm } from 'react-hook-form';
import { addToast } from '../../store/system/toast';

const ToastWrapper: React.FC = () => {
    const globalSystemState = useContext(SystemContext);
    const { dispatch: dispatchSystem } = globalSystemState;

    const form = useForm<{ message: string }>({
        defaultValues: {
            message: 'Test message',
        },
    });

    return (
        <Container>
            <Grid container>
                <Grid item xs={3}>
                    <Button
                        variant="outlined"
                        onClick={() => {
                            dispatchSystem(addToast(form.getValues().message));
                        }}
                    >
                        Create Toast
                    </Button>
                </Grid>
                <Grid item xs={9}>
                    <TextInput name="message" formRef={form} />
                </Grid>
            </Grid>
            <ToastProvider />
        </Container>
    );
};

export default {
    'System Loading Bar': <LoadingBar show={true} />,
    'System Toast': <ToastWrapper />,
};
