export interface School {
  schoolId: number;
  schoolName: string;
  principalName: string;
  totalStudents: number;
  highRisk: number;
  mediumRisk: number;
  lowRisk: number;
  students:Student[]
}

export interface Student {
  id: number;
  fullName: string;
  gender: string;
  age: number;
  riskLevel: string;
  schoolName: string;
}

