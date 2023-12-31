import './cardContainer.css';

export const CardContainer = (props: any) => {
 
  const { children } = props;

  return (
    <div className='container-cards d-flex flex-row justify-content-around flex-wrap'>
      {children}
    </div>
  )
}