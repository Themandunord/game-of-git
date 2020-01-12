import React from 'react';
import { RepositoryListDataItem } from '../types';
import { TableRow, TableCell } from '@material-ui/core';
import GameButton from '../../../components/inputs/button/GameButton';

interface RepositoryListTableRowProps {
    rowData: RepositoryListDataItem;
}

const RepositoryListTableRow: React.FC<RepositoryListTableRowProps> = ({
    rowData,
}) => {
    return (
        <TableRow key={rowData.id}>
            <TableCell>{rowData.name}</TableCell>
            <TableCell>{rowData.description}</TableCell>
            <TableCell>{rowData.createdAt}</TableCell>
            <TableCell>{rowData.updatedAt}</TableCell>
            <TableCell align="right">
                <GameButton
                    repositoryName={rowData.name}
                    action={rowData.game ? 'play' : 'create'}
                >
                    {rowData.game ? 'Play Game' : 'Create Game'}
                </GameButton>
            </TableCell>
        </TableRow>
    );
};
export default RepositoryListTableRow;
