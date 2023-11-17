import './containerImagenesTurismo.css';

export const ContainerImagenesTurismo = (props: any) => {
 
  const { children } = props;

  return (
    <div className='container-cards d-flex flex-row justify-content-between flex-wrap'>
      {children}
    </div>
  )
}