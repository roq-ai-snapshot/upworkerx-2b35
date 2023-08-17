import { ApplicationInterface } from 'interfaces/application';
import { BookingInterface } from 'interfaces/booking';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface FreelancerInterface {
  id?: string;
  user_id?: string;
  skills: string;
  experience: string;
  availability: any;
  rate: number;
  status: string;
  created_at?: any;
  updated_at?: any;
  application?: ApplicationInterface[];
  booking?: BookingInterface[];
  user?: UserInterface;
  _count?: {
    application?: number;
    booking?: number;
  };
}

export interface FreelancerGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  skills?: string;
  experience?: string;
  status?: string;
}
