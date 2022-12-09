export type Selectoption = {
  label: string
  value: number
}

type SelectProps = {
  options: Selectoption[]
  value?: Selectoption
  xyz: (value: Selectoption | undefined) => void
}


function Select({ options, value, xyz }: SelectProps) {
  function clearOptions() {
    xyz(undefined)//?
  }
  function selectOption(option: Selectoption| undefined) {
    xyz(option)//?
  }
  return (
    <div className='container' tabIndex={0}>
      <span className="value">{value?.label}</span>
      <button className='clear-btn' onClick={() => { clearOptions() }}>&times;</button>
      <div className='divider'></div>
      <div className='caret'></div>
      <div>
        <ul className='options show'>
          {options.map(option => (
            <li onClick={e => {
              selectOption(option)
            }} className='option' key={option.value}>{option.label}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Select

