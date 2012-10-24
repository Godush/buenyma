<div class="trOuterCon">
	<div class="trInnerCon" id="buyer">Kaufen
		<div class="trInputCon">
			<div class="trTextField">Menge</div><input type="text" class="trInputField" id="bAmount" onkeyup="getOffer()">
			<div class="trTextField">Res geg.</div><select class="trInputField" id="bResGiven" onchange="getOffer()"><><option>Baustoff</option><option>Credits</option><option>Antimaterie</option></select>
			<div class="trTextField">Res gew.</div><select class="trInputField" id="bResWanted" onchange="getOffer()"><><option>Baustoff</option><option>Credits</option><option>Antimaterie</option></select>
			<div class="trTextField">Max Dist. (Lichtjahre)</div><input type="text" class="trInputField" id="bDist" onkeyup="getOffer()">
		</div>
	</div>
</div>
<div class="trOuterCon">
	<div class="trInnerCon" id="vendor">Verkaufen
		<div class="trInputCon">
			<div class="trTextField">Menge</div><input type="text" class="trInputField" id="vAmount" onkeyup="enableSetVendor()">
			<div class="trTextField">Res geg.</div><select class="trInputField" id="vResGiven" onchange="enableSetVendor()"><option>Baustoff</option><option>Credits</option><option>Antimaterie</option></select>
			<div class="trTextField">Res gew.</div><select class="trInputField" id="vResWanted" onchange="enableSetVendor()"><option>Baustoff</option><option>Credits</option><option>Antimaterie</option></select>
			<div class="trTextField">Quote (1:X)</div><input type="text" class="trInputField" id="vQuote" onkeyup="enableSetVendor()">
			<button id="vSubmit" style="width:100%;height:30px;" disabled="disabled" onclick="setVendor()">Abschicken!</button>
		</div>
	</div>
</div>

<div class="trOuterConOutput" id="vendorOutput">
	<div class="trInnerConOutput">
		<table style="background-color:red;width:100%;">
			<thead>
				<tr class="tHead">
					<td style="width:34%">Menge</td>
					<td style="width:33%">Quote</td>
					<td style="width:33%">Status</td>
				</tr>
			</thead>
			<tbody>
			</tbody>
		</table>
	</div>
</div>
<div class="trOuterConOutput" id="buyerOutput">
	<div class="trInnerConOutput">
		<table style="background-color:red;width:100%;">
			<thead>
				<tr>
					<td style="width:34%">Kosten</td>
					<td style="width:33%">Quote</td>
					<td style="width:33%">Flugdauer</td>
				</tr>
			</thead>
			<tbody>
			</tbody>
		</table>
	</div>
</div>