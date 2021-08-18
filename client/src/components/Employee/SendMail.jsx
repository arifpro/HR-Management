import { rows } from './ShowTable';

const SendMail = ({ selected }) => {
    const data = selected.map((no) => rows[no - 1]);
    console.log(data);

    return <div>{JSON.stringify(selected)}</div>;
};

export default SendMail;
