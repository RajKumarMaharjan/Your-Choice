import CustomForm from '../../components/customsForm/page';

const AddItems = ()=> {
    const formItems = [
        {label:'Item Name', type:'text'}, 
        {label:'Item Description', type:'text'}, 
        {label:'Item Image', type:'file' }
    ]
    return (
        <div>
            Add items
            <CustomForm formItems={formItems} apiEndpoint="/item"/>
        </div>
    )
}
export default AddItems