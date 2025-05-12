// import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
// import { useState } from 'react'

// export function DraggableList() {
//     const [items, setItems] = useState([
//         'Track 1',
//         'Track 2',
//         'Track 3',
//         'Track 4',
//     ])

//     const onDragEnd = (result) => {
//         if (!result.destination) return

//         const newItems = [...items]
//         const [moved] = newItems.splice(result.source.index, 1)
//         newItems.splice(result.destination.index, 0, moved)

//         setItems(newItems)
//     }

//     return (
//         <DragDropContext onDragEnd={onDragEnd}>
//             <Droppable droppableId="trackList">
//                 {(provided) => (
//                     <ul {...provided.droppableProps} ref={provided.innerRef}>
//                         {items.map((item, index) => (
//                             <Draggable key={item} draggableId={item} index={index}>
//                                 {(provided) => (
//                                     <li
//                                         ref={provided.innerRef}
//                                         {...provided.draggableProps}
//                                         {...provided.dragHandleProps}
//                                         style={{
//                                             userSelect: 'none',
//                                             padding: 16,
//                                             marginBottom: 8,
//                                             backgroundColor: '#eee',
//                                             ...provided.draggableProps.style,
//                                         }}
//                                     >
//                                         {item}
//                                     </li>
//                                 )}
//                             </Draggable>
//                         ))}
//                         {provided.placeholder}
//                     </ul>
//                 )}
//             </Droppable>
//         </DragDropContext>
//     )
// }
