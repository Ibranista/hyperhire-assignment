export default function BoxIcon({ className = "" }: { className?: string }) {
    return (
        <div className={`w-2 h-2 bg-primary-gradient rounded-full ${className}`}></div>
    )
}