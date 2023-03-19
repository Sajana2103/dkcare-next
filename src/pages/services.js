import PageWrapper from "../../components/page-wrapper"
const ServicesPage = () => {
  let title = 'Services'
  const page = <div>
    <h1 className="blue title bold">Services</h1>
    <p className="blue text-med">Content</p>
  </div>
  return(
    <PageWrapper title={title} page={page}/>
  )
}
export default ServicesPage