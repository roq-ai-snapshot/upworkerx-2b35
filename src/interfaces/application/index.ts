import { JobInterface } from 'interfaces/job';
import { FreelancerInterface } from 'interfaces/freelancer';
import { GetQueryInterface } from 'interfaces';

export interface ApplicationInterface {
  id?: string;
  job_id?: string;
  freelancer_id?: string;
  date_applied: any;
  cover_letter: string;
  status: string;
  created_at?: any;
  updated_at?: any;

  job?: JobInterface;
  freelancer?: FreelancerInterface;
  _count?: {};
}

export interface ApplicationGetQueryInterface extends GetQueryInterface {
  id?: string;
  job_id?: string;
  freelancer_id?: string;
  cover_letter?: string;
  status?: string;
}
