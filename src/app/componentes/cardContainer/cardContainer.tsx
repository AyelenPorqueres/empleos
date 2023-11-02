import './CardContainer.css';

export const CardContainer = (props: any) => {
 
  const { children } = props;

  return (
    <div className='container-cards d-flex flex-row justify-content-evenly container-fluid'>
      {children}
    </div>
  )
}