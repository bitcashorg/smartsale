import styled from 'styled-components'

import { chains } from '../../../connectors'
import { NETWORK_CONFIGS } from '../../../utils/networkConfig'
import { ButtonSelect } from '../../buttons/ButtonSelect'
import { Dropdown, DropdownItem, DropdownPosition } from '../../common/Dropdown'

const DropdownPagination = styled(Dropdown)`
  width: 30%;
  flex-direction: row;
  align-items: flex-end;
  align-self: flex-end;
  justify-content: flex-end;
  margin: 2em !important;
  margin-right: 3.5em !important;
  cursor: pointer;
  ${({ theme }) => theme.mediaWidth.upToSmall`
    width: 12em;
    margin-right: 0 !important;
  `}
`

const ButtonText = styled.span`
  ${({ theme }) => theme.mediaWidth.upToSmall`
    font-size: 14px;
  `}
`

interface Props {
  onChange: (...event: any[]) => void
  value: number
}

const NetworkInput: React.FC<Props> = ({ onChange, value }) => {
  return (
    <DropdownPagination
      dropdownButtonContent={
        <ButtonSelect content={<ButtonText>{NETWORK_CONFIGS[value].name}</ButtonText>} />
      }
      dropdownPosition={DropdownPosition.right}
      items={chains.map((item, index) => (
        <DropdownItem
          key={index}
          onClick={() => {
            onChange(item.id)
          }}
        >
          {item.name}
        </DropdownItem>
      ))}
    />
  )
}

export default NetworkInput
