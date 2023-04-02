import React from 'react'
import { useMany } from "@refinedev/core";
import { List, useDataGrid, DateField } from "@refinedev/mui";
import { DataGrid, GridColumns } from "@mui/x-data-grid";
import { Table, Space } from "antd";



const AllDoctors = () => {
    const { dataGridProps } = useDataGrid();

    const { data: categoryData, isLoading: categoryIsLoading } = useMany({
        resource: "categories",
        ids: dataGridProps?.rows?.map((item: any) => item?.category?.id) ?? [],
        queryOptions: {
            enabled: !!dataGridProps?.rows,
        },
    });
    

    const columns = React.useMemo<GridColumns<any>>(
        () => [
            {
                field: "id",
                headerName: "Id",
                type: "number",
                minWidth: 50,
            },
            {
                field: "nom",
                headerName: "Nom",
                minWidth: 200,
            },
            {
                field: "prenom",
                headerName: "Prenom",
                valueGetter: ({ row }) => {
                    const value = row?.category?.id;

                    return value;
                },
                minWidth: 300,
                renderCell: function render({ value }) {
                    return categoryIsLoading ? (
                        <>Loading...</>
                    ) : (
                        categoryData?.data?.find((item) => item.id === value)
                            ?.title
                    );
                },
            },
            {
                field: "naissance",
                headerName: "Naissance",
                minWidth: 250,
                renderCell: function render({ value }) {
                    return <DateField value={value} />;
                },
            },
        ],
        [categoryData?.data],
    );

    return (

        <List title="Liste des docteurs">
            <DataGrid  {...dataGridProps} columns={columns} autoHeight />
            
               
        </List>
    );
};
export default AllDoctors