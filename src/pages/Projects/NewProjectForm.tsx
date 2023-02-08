const NewProjectForm = ({formElements, clients, handleFormSubmit, handleFormChange, closeForm}) => (
  <form className='project-form' onSubmit={handleFormSubmit}>
  <button className='btn close-btn' onClick={closeForm}>
    X
  </button>
  <div className='form-group'>
    <label htmlFor='name'>Name</label>
    <input
      type='text'
      name='name'
      id='name'
      value={formElements.name}
      placeholder='Project Name'
      onChange={handleFormChange}
    />
  </div>
  <div className='form-group'>
    <select name='client' value={formElements.client} onChange={handleFormChange}>
      <option defaultValue='Choose client'>Choose client</option>
      {clients.map((client) => (
        <option key={client.name}>{client.name}</option>
      ))}
    </select>
  </div>
  <button className='btn' type='submit'>
    Create Project
  </button>
</form>
)

export default NewProjectForm;