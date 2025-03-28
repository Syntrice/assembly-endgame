import { Icon } from '@iconify/react'

export default function LifeIndicator() {
    return(
        <ul className="flex justify-center gap-5">
            {[...Array(8)].map((_, index) => (
                <li key={index}>
                    <Icon icon="fluent-emoji-flat:red-heart" className="text-4xl" />
                </li>
            ))}
        </ul>
    )
}