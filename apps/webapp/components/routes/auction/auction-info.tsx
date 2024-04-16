import { ProjectWithAuction } from '@/lib/projects'

export function AuctionInfo({ project }: { project: ProjectWithAuction }) {
  return (
    <div className="grid items-center grid-cols-2 gap-5">
      {fields.map((items, k) => (
        <div
          key={k}
          className="flex flex-col w-full px-4 py-3 my-1 text-center rounded-sm bg-muted"
        >
          {items.map((item, ik) => (
            <>
              <ListItem key={ik} {...item} />
              {ik < items.length - 1 ? (
                <hr className="w-full my-2 border-accent/50" />
              ) : null}
            </>
          ))}
        </div>
      ))}
    </div>
  )
}
const fields: Array<Array<ItemProps>> = [
  [
    {
      label: 'Presale Period',
      value: '5/15/24 - 6/30/24',
      fields: []
    },
    {
      label: 'Fundraising Goal',
      value: '$150,000',
      fields: []
    },
    {
      label: 'Max Allocation',
      value: '$5,000',
      fields: []
    }
  ],
  [
    {
      label: 'Token Sale Period',
      value: '7/1/24 - 7/30/24',
      fields: []
    },
    {
      label: 'Fundraising Goal',
      value: '250,0000',
      fields: []
    },
    {
      label: 'Max Allocation',
      value: '$10,000',
      fields: []
    }
  ],
  [
    {
      label: 'Ticker',
      value: 'BC',
      fields: []
    }
  ],
  [
    {
      label: 'Base price',
      value: '$99.99',
      fields: []
    }
  ]
]

function ListItem(props: ItemProps) {
  return (
    <div className="flex justify-between w-full">
      <h3 className="flex justify-between w-full">
        <span className="opacity-70">{props.label}: </span>
        <b>{props.value}</b>
      </h3>
    </div>
  )
}

interface ItemProps {
  label: string
  value: string
  fields?: Array<{ label: string; value: string }>
}
