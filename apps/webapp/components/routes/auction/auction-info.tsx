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
      <div className="flex w-full justify-between">
        <b>{value}</b>
      </div>
    )
  }

  return (
    <div className="flex w-full justify-between">
      <h3 className="flex w-full justify-between">
        <span className="opacity-70">{label}: </span>
        <b>{typeof value === 'string' ? value : null}</b>
      </h3>
    </div>
  )
}

export function AuctionInfo({ project }: { project: ProjectWithAuction }) {
  const fields: Array<Array<ItemProps>> = [
    [
      { label: 'Presale', value: '7/15/24 - 7/30/24' },
      { label: 'Fundraising Goal', value: '$150,000' },
      { label: 'Max Allocation', value: '$1,500' }
    ],
    [
      { label: 'Token Sale', value: '11/2/24 - 11/30/24' },
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
    <div className="grid items-center gap-x-10 gap-y-2 md:grid-cols-2">
      {fields.map((items, k) => {
        return React.isValidElement(items[0].value) ? (
          items[0].value
        ) : (
          <div
            key={k}
            className="flex w-full min-w-[250px] flex-col rounded-sm bg-muted px-4 py-3 text-center"
          >
            {items.map((item, ik) => (
              <Fragment key={ik}>
                <ListItem {...item} />

                {ik < items.length - 1 && (
                  <hr className="my-2 w-full border-accent-secondary/50" />
                )}
              </Fragment>
            ))}
          </div>
        )
      })}
    </div>
  )
}
