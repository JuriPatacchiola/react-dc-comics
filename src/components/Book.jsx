export default function Book({ thumb, series }) {
    return (
        <div className="comic-card">
            <img src={thumb} alt={series} className="comic-thumb" />
            <p className="comic-series">{series.toUpperCase()}</p>
        </div>
    );
}
