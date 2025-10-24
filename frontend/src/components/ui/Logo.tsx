import dark from '../../assets/fishDark.svg';
import light from '../../assets/fishLight.svg';

interface LogoProps {
  variety: 'dark' | 'light';
}

export function Logo ({ variety }: LogoProps) {
  return (
    <div className="flex items-center justify-center">
      <img src={`${variety === 'dark' ? dark : light}`} alt="Fish icon" className="w-10 h-10" />
      <span className={`text-3xl font-semibold text-center ${variety === 'dark' ? 'text-black' : 'text-white'}`}>SUSHIRO</span>
    </div>
  )
}
