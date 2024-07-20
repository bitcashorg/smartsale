import { ProjectWithAuction } from '@/lib/projects'
import { ProjectShare } from './project-share'
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
        <b className="text-right">{typeof value === 'string' ? value : null}</b>
      </h3>
    </div>
  )
}

export function ProjectInfo({
  project,
  presale = false
}: {
  project: ProjectWithAuction
  presale?: boolean
}) {
  const fields: Array<Array<ItemProps>> = [
    [
      { label: 'Presale', value: '7/30/24 - 8/31/24' },
      { label: 'Fundraising Goal', value: '$150,000' },
      { label: 'Max Allocation', value: '$1,500' }
    ],
    [
      { label: 'Token Sale', value: '11/2/24 - 11/30/24' },
      { label: 'Fundraising Goal', value: '$250,000' },
      { label: 'Max Allocation', value: '$10,000' }
    ],
    [{ label: 'Ticker', value: 'BL' }],
    [
      // Passing `project` to `ProjectShare` if it is required as a prop
      { value: <ProjectShare project={project} /> }
    ]
  ]

  const filteredFields = presale ? [fields[0]] : fields
  return (
    <>
      {filteredFields.map((items, k) => {
        return React.isValidElement(items[0].value) ? (
          items[0].value
        ) : (
          <div
            key={k}
            className="flex w-full min-w-[250px] flex-col justify-evenly rounded-sm bg-muted px-4 py-3"
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
    </>
  )
}
