"use client";
import { Button } from "@nextui-org/react";
import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  User as NextUser,
  Chip,
  Tooltip,
  ChipProps,
} from "@nextui-org/react";
import { columns, users } from "./data";
// import { useCallback } from "react";

// Map status to chip colors
const statusColorMap: Record<string, ChipProps["color"]> = {
  active: "success",
  paused: "danger",
  vacation: "warning",
};

// Define the type for the user object
type User = (typeof users)[0];

export default function Home() {
  const [selectedKeys, setSelectedKeys] = React.useState<Set<string>>(
    new Set(["2"])
  );
  const renderCell = React.useCallback((user: User, columnKey: React.Key) => {
    const cellValue = user[columnKey as keyof User];
    console.log(columnKey);

    switch (columnKey) {
      case "name":
        return (
          <NextUser
            avatarProps={{ radius: "lg", src: user.avatar }}
            description={user.email}
            name={cellValue}
          >
            {user.email}
          </NextUser>
        );
      case "role":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize">{cellValue}</p>
            <p className="text-bold text-sm capitalize text-default-400">
              {user.team}
            </p>
          </div>
        );
      case "status":
        return (
          <Chip
            className="capitalize"
            color={statusColorMap[user.status]}
            size="sm"
            variant="flat"
          >
            {cellValue}
          </Chip>
        );
      case "actions":
        return (
          <div className="relative flex items-center justify-end gap-2">
            <Tooltip content="Details">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <p>view</p>
              </span>
            </Tooltip>
            <Tooltip content="Edit user">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <p>edit</p>
              </span>
            </Tooltip>
            <Tooltip color="danger" content="Delete user">
              <span className="text-lg text-danger cursor-pointer active:opacity-50">
                <p>delete</p>
              </span>
            </Tooltip>
          </div>
        );
      default:
        return <>{cellValue}</>;
    }
  }, []);

  const classNames = React.useMemo(
    () => ({
      wrapper: ["max-h-[482px]", "min-w-[860px]"],
      th: [
        "bg-transparent",
        "text-default-500",
        "border-none",
        "border-divider",
      ],
      td: [
        // changing the rows border radius
        // first
        "group-data-[first=true]:first:before:rounded-none",
        "group-data-[first=true]:last:before:rounded-none",
        // middle
        "group-data-[middle=true]:before:rounded-none",
        // last
        "group-data-[last=true]:first:before:rounded-none",
        "group-data-[last=true]:last:before:rounded-none",
      ],
    }),
    []
  );

  return (
    <div className="flex w-full justify-center items-center px-[5vw] py-16">
      <Table
        isStriped
        aria-label="Controlled table example with dynamic content"
        selectionMode="multiple"
        selectedKeys={selectedKeys}
        classNames={classNames}
        onSelectionChange={setSelectedKeys as (keys: Set<string>) => void}
        checkboxesProps={{
          classNames: {
            wrapper: "after:bg-[#000000] after:text-[#FFFFFF] text-[#FFFFFF]",
          },
        }}
      >
        <TableHeader columns={columns} className="">
          {(column) => (
            <TableColumn
              key={column.uid}
              align={column.uid === "actions" ? "end" : "start"}
              className="bg-transparent border-none"
            >
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody items={users}>
          {(item) => (
            <TableRow
              key={item.id}
              onClick={() => console.log("touched")}
              className=" border-b last:border-b-0 border-t cursor-pointer border-red-500"
            >
              {columns.map((column, idx) => (
                <TableCell
                  key={column.uid}
                  className={`${
                    idx !== columns.length - 1 ? "border-r border-red-500" : ""
                  } border-l-0`}
                >
                  {renderCell(item, column.uid)}
                </TableCell>
              ))}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
