import { useLazyQuery } from '@apollo/react-hooks';
import {
    Grid,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    TextField,
} from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import GameButton from '../../components/inputs/button/GameButton';
import RepositoriesListQuery from '../../gql/queries/RepositoriesListQuery.gql';
import { PATH } from '../../router/routes';
import { UserContext } from '../../store/user';
import { RepositoryListDataItem } from './types';
import RepositoryListTableRow from './components/RepositoryListTableRow';

const title = PATH.REPOSITORY_LIST.name;

const RepositoryList = () => {
    const globalUserState = useContext(UserContext);

    const [
        getRepositories,
        {
            data: retrievedRepositories,
            // loading: loadingRepositories
        },
    ] = useLazyQuery<{
        repositoryList: RepositoryListDataItem[];
    }>(RepositoriesListQuery);

    const [searchKey, setSearchKey] = useState<string>('');

    useEffect(() => {
        getRepositories({
            variables: {
                username: globalUserState.state.user?.gitLogin,
            },
        });
    }, [getRepositories, globalUserState.state.user]);

    return (
        <div>
            <Helmet>
                <title>{title}</title>
                <meta name="description" content="Repository List" />
            </Helmet>

            <Grid container justify="center">
                <Grid item xs={8}>
                    <TextField
                        fullWidth
                        variant="outlined"
                        name="Search"
                        placeholder="Search Your Repositories"
                        value={searchKey}
                        onChange={e => setSearchKey(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Table size="small">
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>Description</TableCell>
                                <TableCell>Created At</TableCell>
                                <TableCell>Updated At</TableCell>
                                <TableCell align="right">Game</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {retrievedRepositories &&
                                retrievedRepositories.repositoryList
                                    .filter(
                                        repo =>
                                            searchKey === '' ||
                                            repo.name.indexOf(searchKey) >= 0,
                                    )
                                    .map(repoRow => (
                                        <RepositoryListTableRow
                                            key={repoRow.id}
                                            rowData={repoRow}
                                        />
                                    ))}
                        </TableBody>
                    </Table>
                </Grid>
            </Grid>
        </div>
    );
};

export default RepositoryList;
