<div class="trOuterCon">
	<div class="trInnerCon" id="seller">Kaufen
		<div class="trInputCon">
			<div class="trTextField">Menge</div><input type="text" class="trInputField" name="sAmount">
			<div class="trTextField">Res geg.</div><select class="trInputField" name="sResGiven"><option>Baustoff</option><option>Credits</option><option>Antimaterie</option></select>
			<div class="trTextField">Res gew.</div><select class="trInputField" name="sResWanted"><option>Baustoff</option><option>Credits</option><option>Antimaterie</option></select>
			<div class="trTextField">Max Dist. (h)</div><input type="text" class="trInputField" name="sDist">
		</div>
	</div>
</div>
<div class="trOuterCon">
	<div class="trInnerCon" id="vendor">Verkaufen
		<div class="trInputCon">
			<div class="trTextField">Menge</div><input type="text" class="trInputField" id="vAmount" onkeyup="setOffer()">
			<div class="trTextField">Res geg.</div><select class="trInputField" name="vResGiven"><option>Baustoff</option><option>Credits</option><option>Antimaterie</option></select>
			<div class="trTextField">Res gew.</div><select class="trInputField" name="vResWanted"><option>Baustoff</option><option>Credits</option><option>Antimaterie</option></select>
			<div class="trTextField">Quote (1:X)</div><input type="text" class="trInputField" name="vQuote">
		</div>
	</div>
</div>

<div class="trOuterConOutput" id="sellerOutput">
	<div class="trInnerConOutput">
		<table style="width:100%;display:block;float:left;">
			<tr>
				<td style="width:30%">Name</td>
				<td style="width:33%">Kosten</td>
				<td style="width:33%">Flugdauer</td>
			</tr>
			<tr>
				<td style="width:30%">Klaus</td>
				<td style="width:33%">100000</td>
				<td style="width:33%">1:00 Stunden</td>
			</tr>
		</table>
	</div>
</div>
<div class="trOuterConOutput" id="vendorOutput">
	<div class="trInnerConOutput">
		vendor
		<div id="test" style="float:left;">test</div>
	</div>
</div>