const Table = ({ data }: any) => {
	const headers = data.headers.map((header: string, index: number) => (
		<th key={index}>{header}</th>
	));

	const rows = data.rows.map((row: string[], index: number) => (
		<tr key={index}>
			{row.map((cell, cellIndex) => (
				<td key={cellIndex}>{cell}</td>
			))}
		</tr>
	));

	return (
		<div className="overflow-x-auto">
			<table>
				<thead>
					<tr>{headers}</tr>
				</thead>
				<tbody>{rows}</tbody>
			</table>
		</div>
	);
}

export default Table