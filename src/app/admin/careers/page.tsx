"use client";

import { useState } from "react";
import { useQuery, useMutation } from "convex/react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Plus,
  Search,
  Edit,
  Trash2,
  Eye,
  Star,
  Users,
  MapPin,
  Clock,
  Filter,
  MoreHorizontal,
  Calendar,
} from "lucide-react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { toast } from "sonner";
import { api } from "../../../../convex/_generated/api";

export default function AdminCareersPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");

  const careers = useQuery(api.careers.getAllCareers, { isActive: undefined });
  const departments = useQuery(api.careers.getDepartments);
  const deleteCareerMutation = useMutation(api.careers.deleteCareer);

  // Filter careers
  const filteredCareers =
    careers?.filter((career) => {
      const matchesSearch =
        career.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        career.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
        career.location.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesDepartment =
        selectedDepartment === "All" ||
        career.department === selectedDepartment;

      const matchesStatus =
        selectedStatus === "All" ||
        (selectedStatus === "Active" && career.isActive) ||
        (selectedStatus === "Inactive" && !career.isActive);

      return matchesSearch && matchesDepartment && matchesStatus;
    }) || [];

  const handleDelete = async (id: string, title: string) => {
    try {
      await deleteCareerMutation({ id: id as any });
      toast.success(`Career "${title}" deleted successfully`);
    } catch (error) {
      toast.error("Failed to delete career");
      console.error(error);
    }
  };

  const stats = {
    total: careers?.length || 0,
    active: careers?.filter((c) => c.isActive).length || 0,
    inactive: careers?.filter((c) => !c.isActive).length || 0,
    featured: careers?.filter((c) => c.featured).length || 0,
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Career Management
          </h1>
          <p className="text-gray-600 mt-1">
            Manage job postings and applications
          </p>
        </div>
        <Link href="/admin/careers/new">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            New Career
          </Button>
        </Link>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  Total Careers
                </p>
                <p className="text-2xl font-bold text-gray-900">
                  {stats.total}
                </p>
              </div>
              <div className="p-3 rounded-full bg-blue-50">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Active</p>
                <p className="text-2xl font-bold text-green-600">
                  {stats.active}
                </p>
              </div>
              <div className="p-3 rounded-full bg-green-50">
                <Eye className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Inactive</p>
                <p className="text-2xl font-bold text-gray-600">
                  {stats.inactive}
                </p>
              </div>
              <div className="p-3 rounded-full bg-gray-50">
                <Clock className="h-6 w-6 text-gray-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Featured</p>
                <p className="text-2xl font-bold text-yellow-600">
                  {stats.featured}
                </p>
              </div>
              <div className="p-3 rounded-full bg-yellow-50">
                <Star className="h-6 w-6 text-yellow-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search careers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Department Filter */}
            <div className="flex gap-2 flex-wrap">
              {[
                "All",
                ...(departments
                  ?.filter((d) => d.name !== "All")
                  .map((d) => d.name) || []),
              ].map((dept) => (
                <Button
                  key={dept}
                  variant={selectedDepartment === dept ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedDepartment(dept)}
                  className="rounded-full"
                >
                  {dept}
                </Button>
              ))}
            </div>

            {/* Status Filter */}
            <div className="flex gap-2">
              {["All", "Active", "Inactive"].map((status) => (
                <Button
                  key={status}
                  variant={selectedStatus === status ? "secondary" : "outline"}
                  size="sm"
                  onClick={() => setSelectedStatus(status)}
                  className="rounded-full"
                >
                  {status}
                </Button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Careers Table */}
      <Card>
        <CardHeader>
          <CardTitle>All Careers ({filteredCareers.length})</CardTitle>
          <CardDescription>
            Manage your job postings and track applications
          </CardDescription>
        </CardHeader>
        <CardContent>
          {filteredCareers.length > 0 ? (
            <div className="space-y-4">
              {filteredCareers.map((career) => (
                <div
                  key={career._id}
                  className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-semibold text-lg">{career.title}</h3>
                      <div className="flex items-center gap-2">
                        <Badge
                          variant={career.isActive ? "default" : "secondary"}
                        >
                          {career.isActive ? "Active" : "Inactive"}
                        </Badge>
                        {career.featured && (
                          <Badge
                            variant="outline"
                            className="text-yellow-600 border-yellow-200"
                          >
                            <Star className="w-3 h-3 mr-1 fill-current" />
                            Featured
                          </Badge>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                      <span className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {career.department}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {career.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {career.type}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(career.createdAt).toLocaleDateString()}
                      </span>
                    </div>

                    {career.salary && (
                      <p className="text-sm text-green-600 font-medium">
                        {career.salary}
                      </p>
                    )}
                  </div>

                  <div className="flex items-center gap-2">
                    <Link href={`/careers/${career.slug}`} target="_blank">
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                    </Link>

                    <Link href={`/admin/careers/${career._id}/edit`}>
                      <Button variant="ghost" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                    </Link>

                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-red-600 hover:text-red-700"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Delete Career</AlertDialogTitle>
                          <AlertDialogDescription>
                            Are you sure you want to delete "{career.title}"?
                            This action cannot be undone.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction
                            onClick={() =>
                              handleDelete(career._id, career.title)
                            }
                            className="bg-red-600 hover:bg-red-700"
                          >
                            Delete
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                No careers found
              </h3>
              <p className="text-gray-600 mb-4">
                {searchTerm ||
                selectedDepartment !== "All" ||
                selectedStatus !== "All"
                  ? "No careers match your current filters."
                  : "Get started by creating your first career posting."}
              </p>
              {!searchTerm &&
                selectedDepartment === "All" &&
                selectedStatus === "All" && (
                  <Link href="/admin/careers/new">
                    <Button>
                      <Plus className="mr-2 h-4 w-4" />
                      Create Career
                    </Button>
                  </Link>
                )}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
