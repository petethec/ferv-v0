// Add to the existing Project interface
export interface Project {
  // ... existing properties ...
  mergeDetails?: {
    sourceProjectId: string;
    targetProjectId: string;
    mergeDate: Date;
  };
}