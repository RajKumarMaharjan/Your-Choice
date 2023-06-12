import CustomForm from "../../components/customsForm/page"

const AddItems =()=>{
    const formItems = [
        {label:'Item Name', type: 'text'},
        {label:'Item Description', type: 'text'},
        {label:'Item Image', type: 'file'}
    ]
    return(
        <div>
            Add Items
            <CustomForm formItems={formItems} apiEndpoint="/items"/>
        </div>
    )
}
export default AddItems