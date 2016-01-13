function index_of(list, element) {
	for(var i = 0; i < list.length; i++)
		if(element == list[i])
			return i;
	return -1;
}