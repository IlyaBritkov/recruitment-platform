import IRoute from 'app/types/IRoute';
import { ScheduleTechSpecialist } from './components/ScheduleTechSpecialist/index';
import { Candidate } from './components/Candidate/Candidate';
import { DashBoard } from './components/DashBoard/DashBoard';
import { Profile } from './components/Profile/Profile';
import { ScheduleRecruiter } from './components/ScheduleRecruiter/index';
import { NotFoundPage } from './components/NotFound/index';

export const routesAdmin: Array<IRoute> = [
	{
		path: '/dashboard',
		exact: false,
		component: DashBoard,
	},
	{
		path: '/candidate',
		exact: false,
		component: Candidate,
	},
	{
		path: '/profile',
		exact: false,
		component: Profile,
	},
	{
		path: '/schedule-recruiter',
		exact: false,
		component: ScheduleRecruiter,
	},
	{
		path: '/schedule-techspecialist',
		exact: false,
		component: ScheduleTechSpecialist,
	},
	{
		path: '/*',
		exact: false,
		component: NotFoundPage,
	},
];

export default routesAdmin;
