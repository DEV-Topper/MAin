import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";

const AdminSettings = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Admin Settings</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-center py-4">
          <span>Enable Notifications</span>
          <Switch defaultChecked />
        </div>
        <div className="flex justify-between items-center py-4">
          <span>Dark Mode</span>
          <Switch />
        </div>
      </CardContent>
    </Card>
  );
};

export default AdminSettings;
