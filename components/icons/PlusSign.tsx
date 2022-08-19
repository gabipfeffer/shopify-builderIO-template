const PlusSign = ({ ...props }) => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 1024 1024"
      className="icon icon-plus"
      {...props}
      style={{
        fill: 'currentColor',
        display: 'inline-block',
        verticalAlign: 'middle',
      }}
    >
      <path d="M465.066 465.067l0.001-411.166c-0.005-0.407-0.005-0.407-0.006-0.805 0-29.324 23.796-53.095 53.149-53.095s53.149 23.771 53.149 53.095c-0.001 0.365-0.001 0.365-0.004 0.524l-0.009 411.446 398.754 0.001c0.407-0.005 0.407-0.005 0.805-0.006 29.324 0 53.095 23.796 53.095 53.149s-23.771 53.149-53.095 53.149c-0.365-0.001-0.365-0.001-0.524-0.004l-399.037-0.009-0.009 396.75c0.059 1.378 0.059 1.378 0.071 2.762 0 29.35-23.817 53.142-53.197 53.142-28.299 0-51.612-22.132-53.124-50.361l-0.044-0.832 0.583-0.382-0.586 0.017c-0.020-0.795-0.020-0.795-0.024-1.59 0.011-1.42 0.011-1.42 0.050-1.933l0.001-397.576-409.162-0.009c-1.378 0.059-1.378 0.059-2.762 0.071-29.35 0-53.142-23.817-53.142-53.197 0-28.299 22.132-51.612 50.361-53.124l0.832-0.044 0.382 0.583-0.017-0.586c0.795-0.020 0.795-0.020 1.59-0.024 1.42 0.011 1.42 0.011 1.933 0.050l409.986 0.001z"></path>
    </svg>
  )
}

export default PlusSign