export class Step {
  id?: string;
  stepNumber: number;
  description: string;

  constructor(id: string, stepNumber: number, description: string) {
    this.id = id;
    this.stepNumber = stepNumber;
    this.description = description;
  }
}
