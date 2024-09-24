import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useAdminUsers } from "@/hooks/adminHook";

const ManageUsers = () => {
  const { data: users } = useAdminUsers();

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <Input placeholder="Search users" className="w-1/3" />
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableCell className="font-medium">ID</TableCell>
            <TableCell className="font-medium">Name</TableCell>
            <TableCell className="font-medium">Email</TableCell>
            <TableCell className="font-medium">Actions</TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users &&
            users.map((user: any) => (
              <TableRow key={user?._id}>
                <TableCell>{user?._id}</TableCell>
                <TableCell>{user?.userName}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>
                  <div className="flex">
                    <Button>Edit</Button>
                    <Button className="ml-2" variant="destructive">
                      Delete
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ManageUsers;
