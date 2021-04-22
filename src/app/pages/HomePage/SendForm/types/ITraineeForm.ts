import { useForm } from 'react-hook-form';
import IListItemSelect from './IListItemSelect';

interface ITraineeForm {
	register: ReturnType<typeof useForm>['register'];
	errorMessage: ReturnType<typeof useForm>['errors'];
	englishLevel: Array<IListItemSelect>;
	primarySkill: Array<IListItemSelect>;
}

export default ITraineeForm;
