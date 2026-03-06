import { facultyMembers } from "@/data/faculty";

export type FacultyMember = {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
};

export async function getFaculty(): Promise<FacultyMember[]> {
  return facultyMembers;
}
