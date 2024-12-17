export type ScheduleType = 'full' | 'monthly' | 'quarterly' | 'annual';

export interface PaymentSchedule {
  type: ScheduleType;
  amount: number;
  totalPayments: number;
}