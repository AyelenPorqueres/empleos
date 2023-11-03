import './CardContainer.css';

export const CardContainer = (props: any) => {
 
  const { children } = props;

  return (
    <div className='container-cards d-flex flex-row justify-content-between container-fluid flex-wrap'>
      {children}
    </div>
  )
}