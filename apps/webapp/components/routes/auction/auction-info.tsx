import { ProjectWithAuction } from '@/lib/projects'
import { ProjectShare } from '../project/project-share'
import React, { ReactNode, Fragment } from 'react'

interface ItemProps {
  label?: string
  value: string | ReactNode
  fields?: Array<{ label: string; value: string }>
}

function ListItem({ label, value }: ItemProps) {
  if (!label && React.isValidElement(value)) {
    // Directly return JSX elements
    return (
      <div className="flex justify-between w-full">
        <b>{value}</b>
      </div>
    )
  }

  return (
    <div className="flex justify-between w-full">
      <h3 className="flex justify-between w-full">
        <span className="opacity-70">{label}: </span>
        <b>{typeof value === 'string' ? value : null}</b>
      </h3>
    </div>
  )
}

export function AuctionInfo({ project }: { project: ProjectWithAuction }) {
  const fields: Array<Array<ItemProps>> = [
    [
      { label: 'Presale Period', value: '6/1/24 - 6/30/24' },
      { label: 'Fundraising Goal', value: '$150,000' },
      { label: 'Max Allocation', value: '$1,500' }
    ],
    [
      { label: 'Token Sale Period', value: '7/1/24 - 7/30/24' },
      { label: 'Fundraising Goal', value: '$250,000' },
      { label: 'Max Allocation', value: '$10,000' }
    ],
    [{ label: 'Ticker', value: 'BC' }],
    [
      // Passing `project` to `ProjectShare` if it is required as a prop
      { value: <ProjectShare project={project} /> }
    ]
  ]

  return (
    <div className="grid items-center gap-x-6 gap-y-2 md:grid-cols-2">
      {fields.map((items, k) => {
        return React.isValidElement(items[0].value) ? (
          items[0].value
        ) : (
          <div
            key={k}
            className="flex flex-col w-full px-4 py-3 text-center rounded-sm bg-muted"
          >
            {items.map((item, ik) => (
              <Fragment key={ik}>
                <ListItem {...item} />

                {ik < items.length - 1 && (
                  <hr className="w-full my-2 border-accent-secondary/50" />
                )}
              </Fragment>
            ))}
          </div>
        )
      })}
    </div>
  )
}