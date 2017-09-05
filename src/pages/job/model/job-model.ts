import { Remote } from "./remote";
export class Job {
  constructor (
    public id: number,
    public title: string,
    public company_id: number,
    public local: string,
    public remote: string
  ){}
}
