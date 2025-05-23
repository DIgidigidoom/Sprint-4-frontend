import { eventBus, showSuccessMsg } from '../services/event-bus.service'
import { useState, useEffect, useRef } from 'react'

export function UserMsg() {
	const [msg, setMsg] = useState(null)
	const timeoutIdRef = useRef()

	useEffect(() => {
		const unsubscribe = eventBus.on('show-msg', msg => {
			setMsg(msg)
			if (timeoutIdRef.current) {
				timeoutIdRef.current = null
				clearTimeout(timeoutIdRef.current)
			}
			timeoutIdRef.current = setTimeout(closeMsg, 3000)
		})

		return () => {
			unsubscribe()
		}
	}, [])

	function closeMsg() {
		setMsg(null)
	}

	function msgClass() {
		return msg ? 'visible' : ''
	}
	return (
		<section className={`user-msg ${msg?.type} ${msgClass()}`}>
			{msg?.txt}
		</section>
		// msg && (
		// 	<section className={`user-msg ${msg?.type} ${msgClass()}`}>
		// 		{msg?.imgUrl && <img src={msg.imgUrl} alt="msg" className="msg-img" />}
		// 		<span>{msg?.txt}</span>
		// 	</section>
		// )
	)
}
