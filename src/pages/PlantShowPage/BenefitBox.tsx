import clsx from 'clsx';

type BenefitBoxProps = {
    icon: string;
    title: string;
    description: string;
}

const BenefitBox = ({icon, title, description}: BenefitBoxProps) => {
    return <div className="flex flex-col items-center px-2 py-4">
        <i className={clsx('text-emerald-700 text-3xl', icon)} />
        <div className="text-slate-700 my-1">{title}</div>
        <p className="flex-wrap text-slate-500 text-sm text-center">{description}</p>
    </div>
}

export default BenefitBox;