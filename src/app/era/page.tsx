'use client';

import { Era, Timeline } from '../../../public/era';
import { Sidelist } from '../../../public/sidelist';
import { useState } from 'react';

interface List {
	dataname?: string;
	data: Era[];
}

export default function Era() {
	const era: List[] = [
		{
			dataname: '綜合史',
			data: [
				{
					eraname: '東亞近代史',
					describe: '',
					thing: [
						{
							date: new Date('1966'),
							thing: '文化大革命',
							other: [
								'組織紅衛兵(學生)',
								'口號:破四舊，立四新；',
								'革命無罪造反有理',
								'也稱為(十年浩劫)',
							],
						},
						{
							date: new Date('1967'),
							thing: '東南亞國協成立',
							other: ['(曼谷)'],
						},
						{
							date: new Date('1969'),
							thing: '中蘇關西降至冰點',
							other: ['(邊境問題)'],
						},
						{
							date: new Date('1972'),
							thing: '中美 關西正常化',
							other: ['尼克森訪問北京森'],
						},
						{ date: new Date('1973'), thing: '美國從越南撤軍' },
						{
							date: new Date('1975'),
							thing: '越南統一',
							other: ['北越(共產)統一越南', '越戰結束'],
						},
						{
							date: new Date('1976'),
							thing: '毛澤東',
							other: ['四人幫失勢', '(王洪文、張春橋、江青、姚文元)'],
						},
						{
							date: new Date('1977'),
							thing: '東約解散',
							other: ['因東南亞大多為第三世界國家', '成效有限'],
						},
						{
							date: new Date('1978'),
							thing: '中國改革開放',
							other: [
								'鄧小平推動',
								'口號:對內改革，對外開放',
								'(廢人民公社、設經濟特區',
								'整頓國營企業)',
								'(開放經濟，政治保守)',
							],
						},
						{
							date: new Date('1980'),
							thing: '成立經濟特區',
							other: ['深圳、珠海、汕頭、廈門、海南'],
						},
						{
							date: new Date('1989'),
							thing: '六四天安門事件',
							other: [
								'學生為弔念胡耀邦逝世並追求政治改革',
								'集結於 北京-天安門 廣場前',
								'中共後以武力鎮壓',
								'國際施予經濟制裁',
							],
						},
						{
							date: new Date('1989'),
							thing: '中蘇關西正常化',
							other: ['戈巴契夫訪中'],
						},
						{
							date: new Date('1990'),
							thing: '蘇聯解體',
							other: ['(戈巴契夫請辭)', '鄧小平感受到壓力(P=F/A)'],
						},
						{ date: new Date('1990'), thing: '南巡講話', other: ['鼓勵經濟'] },
						{ date: new Date('1994'), thing: '李登輝推出新南向政策' },
						{ date: new Date('1997'), thing: '歸還香港', other: ['英國'] },
						{ date: new Date('1999'), thing: '歸還澳門', other: ['葡萄牙'] },
					],
				},
			],
		},
		{
			dataname: 'WW1-WW2',
			data: [
				{
					eraname: '一戰',
					describe: '',
					thing: [
						{
							date: new Date('1914'),
							thing: '一戰爆發',
							other: ['奧匈王儲遇害(賽拉耶佛)'],
						},
						{ date: new Date('1915'), thing: '日提21條' },
						{ date: new Date('1915'), thing: '新文化運動', other: ['陳獨秀'] },
						{ date: new Date('1917'), thing: '二月革命', other: ['推翻沙皇'] },
						{
							date: new Date('1917'),
							thing: '十月革命',
							other: ['推翻臨時政府', '列寧上台', '退出一戰', '美國加入'],
						},
						{ date: new Date('1919'), thing: '一戰結束' },
					],
				},
				{
					eraname: '戰間期',
					describe: '',
					thing: [
						{
							date: new Date('1919'),
							thing: '巴黎和會',
							other: ['凡爾賽條約&民族自決'],
						},
						{ date: new Date('1919'), thing: '54運動', other: ['山東問題'] },
						{
							date: new Date('1920'),
							thing: '國際聯盟成立',
							other: ['美國未參加(孤立主義)', '威爾遜14點和平原則'],
						},
						{
							date: new Date('1922'),
							thing: '墨索里尼取得義大利統治權',
							other: ['法西斯黨', '極權'],
						},
						{
							date: new Date('1928'),
							thing: '史達林推動計畫經濟',
							other: ['發展國防工業'],
						},
						{
							date: new Date('1929'),
							thing: '經濟大恐慌',
							other: ['紐約股市狂跌', '羅斯福新政', '(發展基礎建設)'],
						},
						{
							date: new Date('1933'),
							thing: '希特勒當選德國總理',
							other: ['納粹黨', '反共、反猶', '毀凡爾賽條約'],
						},
						{
							date: new Date('1938'),
							thing: '德國併吞蘇台德地區',
							other: ['英、法行姑息政策', '慕尼黑協定'],
						},
						{ date: new Date('1939'), thing: '蘇德不侵犯條約' },
					],
				},
				{
					eraname: '二戰',
					describe: '',
					thing: [
						{
							date: new Date('1939'),
							thing: '二戰爆發',
							other: ['德侵波蘭', '與蘇瓜分'],
						},
						{
							date: new Date('1941'),
							thing: '德侵蘇聯',
							other: ['毀蘇德不侵犯條約'],
						},
						{
							date: new Date('1941'),
							thing: '珍珠港事件',
							other: ['日侵美珍珠港', '美國加入戰局'],
						},
						{ date: new Date('1943'), thing: '義大利投降' },
						{ date: new Date('1943'), thing: '盟軍反擊' },
						{ date: new Date('1944'), thing: '諾曼地登陸' },
						{ date: new Date('1945'), thing: '雅爾達會議' },
						{
							date: new Date('1945'),
							thing: '德國投降',
							other: ['希特勒自殺'],
						},
						{
							date: new Date('1945'),
							thing: '日軍投降',
							other: ['空降原子彈', '無條件投降'],
						},
						{
							date: new Date('1945'),
							thing: '二戰結束',
							other: ['日本最後投降'],
						},
						{
							date: new Date('1945'),
							thing: '聯合國成立',
							other: ['總部:紐約', '(成立:加州)'],
						},
					],
				},
			],
		},
		{
			dataname:'冷戰 ( From AI 可能不準#)',
			data:[
				{
					eraname: '冷戰',
					describe: '',
					thing: [
						{
							date: new Date('1945'),
							thing: '雅爾達會議',
							other: ['大三領袖', '東西方勢力範圍'],
						},
						{
							date: new Date('1946'),
							thing: '美國提出杜魯門主義',
							other: ['反共', '美國經濟援助'],
						},
						{
							date: new Date('1947'),
							thing: '杜魯門主義',
							other: ['美國經濟援助', '反共'],
						},
						{
							date: new Date('1947'),
							thing: '馬歇爾計畫',
							other: ['美國經濟援助', '反共'],
						},
						{
							date: new Date('1948'),
							thing: '柏林封鎖',
							other: ['東西柏林分裂', '西方空運'],
						},
						{
							date: new Date('1949'),
							thing: '北約組織成立',
							other: ['美國主導', '反共'],
						},
						{
							date: new Date('1949'),
							thing: '中國內戰',
							other: ['國民黨敗退台灣', '中華人民共和國成立'],
						},
						{
							date: new Date('1950'),
							thing: '朝鮮戰爭',
							other: ['北韓入侵南韓', '聯合國支援南韓'],
						},
						{
							date: new Date('1950'),
							thing: '中國介入朝鮮戰爭',
							other: ['中國支援北韓', '美國支援南韓'],
						},
						{
							date: new Date('1953'),
							thing: '朝鮮戰爭停戰',
							other: ['三八線', '南北韓分裂'],
						},
						{
							date: new Date('1955'),
							thing: '華沙條約組織成立',
							other: ['蘇聯主導', '反北約'],
						},
						{
							date: new Date('1955'),
							thing: '東歐國家蘇聯化',
							other: ['蘇聯主導', '反北約'],
						},
						{
							date: new Date('1956'),
							thing: '匈牙利事件',
							other: ['匈牙利反蘇', '蘇聯鎮壓'],
						},
						{
							date: new Date('1959'),
							thing: '古巴革命',
							other: ['古巴共產黨', '美國封鎖'],
						},
						{
							date: new Date('1961'),
							thing: '古巴飛彈危機',
							other: ['蘇聯飛彈基地', '美國封鎖'],
						},
						{
							date: new Date('1962'),
							thing: '中印邊境戰爭',
							other: ['中國勝利', '中國核武器'],
						},
						{
							date: new Date('1964'),
							thing: '中國核武器',
							other: ['中國勝利', '中國核武器'],
						},
						{
							date: new Date('1968'),
							thing: '捷克事件',
							other: ['捷克反蘇', '蘇聯鎮壓'],
						},
						{
							date: new Date('1972'),
							thing: '美國尼克森訪問中國',
							other: ['中美關係正常化', '中國反蘇'],
						},
						{
							date: new Date('1975'),
							thing: '越南戰爭',
							other: ['美國撤軍', '越南統一'],
						},
						{
							date: new Date('1979'),
							thing: '中國改革開放',
							other: ['鄧小平', '經濟改革'],
						},
						{
							date: new Date('1980'),
							thing: '波蘭事件',
							other: ['波蘭反蘇', '蘇聯鎮壓'],
						},
						{
							date: new Date('1985'),
							thing: '蘇聯戈巴契夫上台',
							other: ['蘇聯改革', '蘇聯解體'],
						},
						{
							date: new Date('1989'),
							thing: '柏林圍牆倒塌',
							other: ['東西德統一', '東歐國家蘇聯化'],
						},
						{
							date: new Date('1991'),
							thing: '蘇聯解體',
							other: ['蘇聯解體', '俄羅斯獨立'],
						},
						{
							date: new Date('1997'),
							thing: '香港回歸',
							other: ['香港回歸', '中英聯合聲明'],
						},
						{
							date: new Date('1999'),
							thing: '澳門回歸',
							other: ['澳門回歸', '中葡聯合聲明'],
						},
						{
							date: new Date('2017'),
							thing: '中國一帶一路',
							other: ['中國一帶一路', '經濟改革'],
						}
					]
				}
			]
		},
		{
			dataname:'西方歷史',
			data:[{
				eraname:'上古',
				describe:'',
				thing:[
					{date : new Date('0753'),thing:'王政時期',other:['國王統治'],minus :true},
					{date : new Date('0533'),thing:'波斯帝國',other:['橫跨歐亞非三洲'],minus :true},
					{date : new Date('0509'),thing:'共和時期',other:['元老院決策','執政官執政','晚期獨裁官執政'],minus :true},
					{date : new Date('0400'), thing: '馬其頓統一希臘城邦' ,minus :true}, 
					{date : new Date('0334'), thing: '亞歷山大東征', other: ['征服西亞、埃及、波斯', '建立跨越歐亞非帝國(第一個)',"建立希臘化城市","產生希臘化文化","歐幾里得·幾何原本","阿基米德"],minus :true},
					{date : new Date('0027'),thing:'帝國時期',other:['屋大維結束內戰','展開200年羅馬和平'],minus :true},
					{date : new Date('0001'),thing:'基督教創立',other:['耶和華一神信仰','被迫害']},
					{date : new Date('313'),thing:'基督教合法',other:['君士坦丁','米蘭敕令']},
					{date : new Date('380'),thing:'基督教國教化',other:['狄奧多西一世','薩洛尼卡赦令']},
					{date : new Date('395'),thing:'東西羅馬',other:['日耳曼人入侵','分裂東西羅馬帝國','狄奧多溪掌權']},
					{date : new Date('476'),thing:'西羅馬帝國滅亡',other:['日耳曼入侵','進入中古']},
				]
			},{
				eraname:'中古',
				describe:'',
				thing:[
					{date : new Date('527'),thing:'東羅馬帝國',other:['查士丁尼一世','拜占庭帝國','東正教']},
					{date : new Date('610'),thing:'伊斯蘭教',other:['穆罕默德','麥加','開始伊斯蘭教']},
					{date : new Date('632'),thing:'阿拉伯帝國',other:['伊斯蘭教向外擴張','工商業發達','抄寫古(希臘、羅馬)籍']},
					{date : new Date('750'),thing:'阿拉伯帝國統治範圍擴大',other:['橫跨歐亞非']},
					{date : new Date('962'),thing:'神聖羅馬帝國',other:['東法蘭克','奧托一世','教皇加冕']},
					{date : new Date('1037'),thing:'塞爾柱土耳其',other:['塞爾柱帝國成立']},
					{date : new Date('1054'),thing:'東西教會分裂',other:['教會分裂','東正教','天主教']},
					{date : new Date('1095'),thing:'十字軍東征',other:['教宗呼籲','十字軍東征','耶路撒冷王國']},
					{date : new Date('1194'),thing:'塞爾柱帝國滅亡',other:['亡於蒙古人']},
					{date : new Date('1299'),thing:'鄂圖曼土耳其帝國出現'},
					{date : new Date('1204'),thing:'第四次十字軍東征',other:['十字軍東征','佔領君士坦丁堡','建立拉丁帝國']},
					{date : new Date('1401'),thing:'文藝復興',other:['人文主義、方言文學','(義大利 : 但丁、佩脫拉克、薄伽丘)','(英國:莎士比亞)','畫作不再限於宗教題材','(達文西、拉斐爾、米開朗基羅)','義大利北部','阿拉伯保存古籍','印刷術']},
					{date : new Date('1453'),thing:'君士坦丁堡陷落',other:['鄂圖曼土耳其','君士坦丁堡陷落','東羅馬帝國滅亡']},
				]},
				{
					eraname:'近代',
					describe:'',
					thing:[
					{date : new Date('1486'),thing:'發現好望角',other:['狄亞士','風暴角']},
					{date : new Date('1492'),thing:'哥倫布發現美洲',other:['哥倫布','發現美洲']},
					{date : new Date('1497'),thing:'達伽馬抵達印度',other:['開通新航路']},
					{date : new Date('1494'),thing:'葡、西瓜分美洲',other:['托德西利雅斯條約','西班牙獲得美洲','葡萄牙獲得非洲','亞洲海路']},
					{date : new Date('1517'),thing:'宗教改革',other:['馬丁路德','宗教改革','路德教派:','(因信的就得救)','喀爾文教派:','(上帝預先定好誰得救)','英國國教會:','(亨利八世，婚姻問題)','舊教:','(羅耀拉推耶穌會改革天主教)','(重視教綠和知識訓練)','(海外傳教)','基督教二次分裂','對抗教會:','強化民族意識發動戰爭']},
					{date : new Date('1521'),thing:'麥哲倫船員環繞地球一周',other:['麥哲倫死於菲律賓部落衝突']},
					{date : new Date('1571'),thing:'東西教會和解',other:['教會和解','東正教','天主教']},
					{date : new Date('1618'),thing:'三十年戰爭',other:['三十年戰爭','德國','宗教戰爭']},
					{date : new Date('1648'),thing:'三十年戰爭結束',other:['三十年戰爭','德國','宗教戰爭']},
					{date : new Date('1770'),thing:'英國宣布擁有澳大利亞主權',other:['流放犯人','迫害原住民']},
					{date : new Date('1748'),thing:'愛德華·詹寧斯',other:['愛德華·詹寧斯','英國','工業革命']},
					{date : new Date('1776'),thing:'美國獨立戰爭',other:['美國獨立戰爭','美國']},
					{date : new Date('1789'),thing:'法國大革命',other:['法國大革命','法國']},
					{date : new Date('1804'),thing:'拿破崙一世加冕',other:['拿破崙一世','法國']},
				],
			},
		]
		}
	];

	const [data, setdata] = useState(era[0].data);

	return (
		<div>
			<Sidelist className='column'>
				{era.map((item, index) => {
					const { dataname, data } = item;
					return (
						<li key={index}>
							<h3 key='default'>
								<button onClick={() => setdata(data)}>{dataname}</button>
							</h3>
							<ul className='row'>
								{data.map((item, index) => {
									const { eraname, thing } = item;
									const data: Era[] = [
										{
											eraname: eraname,
											thing: thing,
										},
									];
									return (
										<li key={index}>
											<button onClick={() => setdata(data)}>{eraname}</button>
										</li>
									);
								})}
							</ul>
						</li>
					);
				})}
			</Sidelist>
			<div>
				<br />
				<br />
			</div>
			<Timeline eradata={data} />
		</div>
	);
}
