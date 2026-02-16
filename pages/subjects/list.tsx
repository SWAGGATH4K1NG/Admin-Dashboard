import { CreateButton } from "@/components/refine-ui/buttons/create";
import { DataTable } from "@/components/refine-ui/data-table/data-table";
import { Breadcrumb } from "@/components/refine-ui/layout/breadcrumb";
import { ListView } from "@/components/refine-ui/views/list-view";
import {
  Select,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { DEPARTMENT_OPTIONS } from "@/constants";
import { useTable, } from "@refinedev/react-table";
import { Subject } from "@/types";
import { ColumnDef } from "@tanstack/react-table";


import { Search } from "lucide-react";
import { useState, useMemo} from "react";
import { Badge } from "@/components/ui/badge";


const SubjectsList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [useSelect, setUseSelect] = useState("all");

  const subjectTable = useTable<Subject>({
    columns: useMemo<ColumnDef<Subject>[]>(() => [
        {
        id:'code', 
        accessorKey:'code', 
        size: 100, 
        header: () =><p className="column-title ml-2">Code</p>,
        cell: ({ getValue }) => <Badge>{getValue<string>()}</Badge>
        },
        {
            id:'name', 
            accessorKey:'name',
            size: 200,
            header: () => <p className="column-title ml-2">Name</p>,
            cell : ({ getValue }) => 
            <span 
            className="text-foreground/80">{getValue<string>()}
            </span>,
            filterFn: 'includesString'
        },
        {   
            id:'department', 
            accessorKey:'department',
            size: 150,
            header: () => <p className="column-title ml-2">Department</p>,
            cell : ({ getValue }) => <Badge
            variant="secondary">{getValue<string>()}</Badge>,
        },
        {
            id:'description', 
            accessorKey:'description',
            size: 300,
            header: () => <p className="column-title ml-2">Description</p>,
            cell : ({ getValue }) => <span 
            className="truncate line-clamp-2">{getValue<string>()}</span>,
        },


    ], []),
    refineCoreProps: {
        resource: "subjects",
        pagination: { pageSize: 10, mode: 'server' },
        filters:{},
        sorters:{}
        },
  });


  return (
    <ListView>
      <Breadcrumb />

      <h1 className="page-title">Subjects</h1>

      <div className="intro-row">
        <p className="intro-text">
          Manage your subjects here. You can create, edit, and delete subjects
          as needed.
        </p>

        <div className="actions-row">
          <div className="search-field">
            <Search className="search-icon" />
            <input
              type="text"
              placeholder="Search by name or code..."
              className="search-pl-10 w-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex gap-2 w-full sm:w-auto">
            <Select value={useSelect} onValueChange={setUseSelect}>
              <SelectTrigger>
                <SelectValue placeholder="Filter by department" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">
                    All Departments
                    </SelectItem>

                {DEPARTMENT_OPTIONS.map(department => (
                  <SelectItem key={department.value} value={department.value}>
                    {department.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <CreateButton />
          </div>    
        </div>
      </div>

      <DataTable table={subjectTable} />
    </ListView>
  );
};

export default SubjectsList;
