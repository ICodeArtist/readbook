<?php
namespace hsC;
class index{
	
	public function index(){
		$db = \hsTool\db::getInstance('system');
		$version = $db->where('id =? ' ,array('1'))->fetch('version');
		exit(jsonCode('ok', $version));
	}
}
