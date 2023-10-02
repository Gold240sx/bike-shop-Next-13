  "use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


const TablistDemo = () => {
  return (
     <Tabs defaultValue="overview" className="space-y-4 mr-auto">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="analytics" disabled>
                Analytics
              </TabsTrigger>
              <TabsTrigger value="reports">
                Reports
              </TabsTrigger>
              <TabsTrigger value="notifications" disabled>
                Notifications
              </TabsTrigger>
            </TabsList>
            </Tabs>
  )
}

export default TablistDemo