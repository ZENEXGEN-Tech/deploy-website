"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useQuery, useMutation } from "convex/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowLeft, Plus, X, Save, Loader2 } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";
import { api } from "../../../../../../convex/_generated/api";
import { Id } from "../../../../../../convex/_generated/dataModel";

const departments = [
  "Engineering",
  "AI & Data",
  "Design",
  "Infrastructure",
  "Product",
  "Marketing",
  "Sales",
  "HR",
  "Finance",
  "Operations",
];

const jobTypes = [
  "Full-time",
  "Part-time",
  "Contract",
  "Internship",
  "Freelance",
];

const experienceLevels = ["Entry", "Mid", "Senior", "Executive"];

export default function EditCareerPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const router = useRouter();
  const [careerId, setCareerId] = useState<string>("");

  // Resolve params
  useEffect(() => {
    params.then(({ id }) => setCareerId(id));
  }, [params]);

  const career = useQuery(
    api.careers.getCareerById,
    careerId ? { id: careerId as Id<"careers"> } : "skip"
  );
  const updateCareerMutation = useMutation(api.careers.updateCareer);

  const [formData, setFormData] = useState({
    title: "",
    department: "",
    location: "",
    type: "",
    salary: "",
    description: "",
    requirements: [""],
    responsibilities: [""],
    benefits: [""],
    isActive: true,
    featured: false,
    experienceLevel: "",
    remoteAllowed: false,
    applicationDeadline: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Load career data when it's available
  useEffect(() => {
    if (career) {
      setFormData({
        title: career.title,
        department: career.department,
        location: career.location,
        type: career.type,
        salary: career.salary || "",
        description: career.description,
        requirements:
          career.requirements.length > 0 ? career.requirements : [""],
        responsibilities:
          career.responsibilities.length > 0 ? career.responsibilities : [""],
        benefits: career.benefits.length > 0 ? career.benefits : [""],
        isActive: career.isActive,
        featured: career.featured,
        experienceLevel: career.experienceLevel,
        remoteAllowed: career.remoteAllowed,
        applicationDeadline: career.applicationDeadline
          ? new Date(career.applicationDeadline).toISOString().split("T")[0]
          : "",
      });
      setIsLoading(false);
    }
  }, [career]);

  const handleInputChange = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleArrayAdd = (field: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: [...(prev[field as keyof typeof prev] as string[]), ""],
    }));
  };

  const handleArrayRemove = (field: string, index: number) => {
    setFormData((prev) => ({
      ...prev,
      [field]: (prev[field as keyof typeof prev] as string[]).filter(
        (_, i) => i !== index
      ),
    }));
  };

  const handleArrayChange = (field: string, index: number, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: (prev[field as keyof typeof prev] as string[]).map((item, i) =>
        i === index ? value : item
      ),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!careerId) return;

    setIsSubmitting(true);

    try {
      // Filter out empty strings from arrays
      const cleanedData = {
        id: careerId as Id<"careers">,
        ...formData,
        requirements: formData.requirements.filter((r) => r.trim() !== ""),
        responsibilities: formData.responsibilities.filter(
          (r) => r.trim() !== ""
        ),
        benefits: formData.benefits.filter((b) => b.trim() !== ""),
        applicationDeadline: formData.applicationDeadline
          ? new Date(formData.applicationDeadline).getTime()
          : undefined,
      };

      await updateCareerMutation(cleanedData);
      toast.success("Career updated successfully!");
      router.push("/admin/careers");
    } catch (error) {
      toast.error("Failed to update career");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const ArrayInput = ({
    label,
    field,
    placeholder,
  }: {
    label: string;
    field: keyof typeof formData;
    placeholder: string;
  }) => (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <Label>{label}</Label>
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={() => handleArrayAdd(field)}
        >
          <Plus className="h-4 w-4 mr-1" />
          Add
        </Button>
      </div>
      <div className="space-y-2">
        {(formData[field] as string[]).map((item, index) => (
          <div key={index} className="flex gap-2">
            <Input
              value={item}
              onChange={(e) => handleArrayChange(field, index, e.target.value)}
              placeholder={placeholder}
            />
            {(formData[field] as string[]).length > 1 && (
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => handleArrayRemove(field, index)}
              >
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  if (isLoading || !career) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4" />
          <p>Loading career details...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Link href="/admin/careers">
          <Button variant="outline" size="sm">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Careers
          </Button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Edit Career</h1>
          <p className="text-gray-600">Update job posting details</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Basic Information */}
            <Card>
              <CardHeader>
                <CardTitle>Basic Information</CardTitle>
                <CardDescription>
                  Core details about the position
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="title">Job Title *</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => handleInputChange("title", e.target.value)}
                    placeholder="e.g. Senior Full-Stack Developer"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="department">Department *</Label>
                    <Select
                      value={formData.department}
                      onValueChange={(value) =>
                        handleInputChange("department", value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select department" />
                      </SelectTrigger>
                      <SelectContent>
                        {departments.map((dept) => (
                          <SelectItem key={dept} value={dept}>
                            {dept}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="type">Job Type *</Label>
                    <Select
                      value={formData.type}
                      onValueChange={(value) =>
                        handleInputChange("type", value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select job type" />
                      </SelectTrigger>
                      <SelectContent>
                        {jobTypes.map((type) => (
                          <SelectItem key={type} value={type}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="location">Location</Label>
                    <Input
                      id="location"
                      value={formData.location}
                      onChange={(e) =>
                        handleInputChange("location", e.target.value)
                      }
                      placeholder="e.g. Karachi, Pakistan"
                    />
                  </div>

                  <div>
                    <Label htmlFor="experienceLevel">Experience Level *</Label>
                    <Select
                      value={formData.experienceLevel}
                      onValueChange={(value) =>
                        handleInputChange("experienceLevel", value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select experience level" />
                      </SelectTrigger>
                      <SelectContent>
                        {experienceLevels.map((level) => (
                          <SelectItem key={level} value={level}>
                            {level}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="salary">Salary Range (Optional)</Label>
                  <Input
                    id="salary"
                    value={formData.salary}
                    onChange={(e) =>
                      handleInputChange("salary", e.target.value)
                    }
                    placeholder="e.g. $120k - $160k"
                  />
                </div>

                <div>
                  <Label htmlFor="applicationDeadline">
                    Application Deadline (Optional)
                  </Label>
                  <Input
                    id="applicationDeadline"
                    type="date"
                    value={formData.applicationDeadline}
                    onChange={(e) =>
                      handleInputChange("applicationDeadline", e.target.value)
                    }
                  />
                </div>
              </CardContent>
            </Card>

            {/* Description */}
            <Card>
              <CardHeader>
                <CardTitle>Job Description</CardTitle>
                <CardDescription>
                  Detailed description in Markdown format
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea
                  value={formData.description}
                  onChange={(e) =>
                    handleInputChange("description", e.target.value)
                  }
                  placeholder="Write a detailed job description using Markdown..."
                  className="min-h-[200px]"
                  required
                />
                <p className="text-sm text-gray-500 mt-2">
                  You can use Markdown formatting for headers, lists, links,
                  etc.
                </p>
              </CardContent>
            </Card>

            {/* Requirements, Responsibilities, Benefits */}
            <div className="grid grid-cols-1 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Requirements</CardTitle>
                </CardHeader>
                <CardContent>
                  <ArrayInput
                    label="Job Requirements"
                    field="requirements"
                    placeholder="e.g. 5+ years experience with React"
                  />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Responsibilities</CardTitle>
                </CardHeader>
                <CardContent>
                  <ArrayInput
                    label="Key Responsibilities"
                    field="responsibilities"
                    placeholder="e.g. Design and develop user-facing features"
                  />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Benefits</CardTitle>
                </CardHeader>
                <CardContent>
                  <ArrayInput
                    label="Job Benefits"
                    field="benefits"
                    placeholder="e.g. Health insurance and flexible work hours"
                  />
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Publish Settings */}
            <Card>
              <CardHeader>
                <CardTitle>Publish Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="isActive">Active</Label>
                    <p className="text-sm text-gray-500">
                      Make this position visible to applicants
                    </p>
                  </div>
                  <Switch
                    id="isActive"
                    checked={formData.isActive}
                    onCheckedChange={(checked) =>
                      handleInputChange("isActive", checked)
                    }
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="featured">Featured</Label>
                    <p className="text-sm text-gray-500">
                      Highlight this position
                    </p>
                  </div>
                  <Switch
                    id="featured"
                    checked={formData.featured}
                    onCheckedChange={(checked) =>
                      handleInputChange("featured", checked)
                    }
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="remoteAllowed">Remote Allowed</Label>
                    <p className="text-sm text-gray-500">
                      Position allows remote work
                    </p>
                  </div>
                  <Switch
                    id="remoteAllowed"
                    checked={formData.remoteAllowed}
                    onCheckedChange={(checked) =>
                      handleInputChange("remoteAllowed", checked)
                    }
                  />
                </div>
              </CardContent>
            </Card>

            {/* Preview */}
            <Card>
              <CardHeader>
                <CardTitle>Preview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {formData.title && (
                    <h3 className="font-semibold">{formData.title}</h3>
                  )}
                  <div className="flex flex-wrap gap-2">
                    {formData.department && (
                      <Badge variant="secondary">{formData.department}</Badge>
                    )}
                    {formData.type && (
                      <Badge variant="outline">{formData.type}</Badge>
                    )}
                    {formData.featured && (
                      <Badge variant="outline" className="text-yellow-600">
                        Featured
                      </Badge>
                    )}
                  </div>
                  {formData.location && (
                    <p className="text-sm text-gray-600">{formData.location}</p>
                  )}
                  {formData.salary && (
                    <p className="text-sm font-medium text-green-600">
                      {formData.salary}
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Actions */}
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-3">
                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    <Save className="mr-2 h-4 w-4" />
                    {isSubmitting ? "Updating..." : "Update Career"}
                  </Button>
                  <Link href="/admin/careers">
                    <Button variant="outline" className="w-full">
                      Cancel
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </form>
    </div>
  );
}
