import { Task } from '@/types/task'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { TASK_PRIORITIES_COLORS, TASK_PRIORITY_NAMES } from '@/constants/task'

interface TaskCardProps {
  task: Task
}

export function TaskCard({task}: TaskCardProps) {
  
  return (
    <div className="border rounded-md p-4 bg-background shadow-sm hover:shadow-md transition-shadow">
      <div className="space-y-1.5">
        <div className="flex items-center justify-between gap-2">
          <span className="text-xs text-muted-foreground">#{task.id}</span>
          <Badge
            variant="secondary"
            className="text-xs text-[hsl(var(--neutral-white))] ml-auto"
            style={{backgroundColor: TASK_PRIORITIES_COLORS[task.priority]}}>
            <span>{TASK_PRIORITY_NAMES[task.priority]}</span>
          </Badge>
        </div>
        
        <h4 className="text-sm font-medium line-clamp-2">{task.title}</h4>
        
        {task.assignee && (
          <div className="flex items-center gap-1.5">
            <Avatar className="h-5 w-5">
              <AvatarImage src={task.assignee.avatar}/>
              <AvatarFallback className="text-[10px]">{task.assignee.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <span className="text-[11px] text-muted-foreground truncate">
              {task.assignee.name}
            </span>
          </div>
        )}
      </div>
    </div>
  )
}
